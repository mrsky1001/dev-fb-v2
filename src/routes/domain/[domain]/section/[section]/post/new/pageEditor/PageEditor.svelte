<script>
    import { onMount, createEventDispatcher } from 'svelte'

    export let html = ''
    export let editable = true
    export let validate = null
    export let selection = null

    const dispatch = createEventDispatcher()
    let root
    let validator

    onMount(() => {
        const doc = root.ownerDocument

        doc.addEventListener('selectionchange', selectionchange)
        return function () {
            doc.removeEventListener('selectionchange', selectionchange)
        }
    })

    $: if (root && validate) {
        if (validator) validator.disconnect()
        validator = schemaObserver(root, validate)
    }

    function selectionchange(e) {
        const win = root.ownerDocument.defaultView
        const sel = win.getSelection()
        const node = sel.focusNode
        if (root.contains(node) && (node.nodeType === 1 ? node : node.parentNode).isContentEditable) {
            selection = { range: sel.getRangeAt(0), root }
        } else {
            selection = null
        }
    }

    function schemaObserver(el, validate) {
        let mutex = false
        const parse = () => {
            if (mutex) return
            mutex = true
            applySchema(el, validate)
            mutex = false
        }
        parse()
        const observer = new MutationObserver(parse)
        observer.observe(el, { childList: true, subtree: true })
        return observer
    }

    function applySchema(el, validate) {
        const doc = el.ownerDocument
        const iter = doc.createNodeIterator(el, NodeFilter.SHOW_ELEMENT)
        let n = iter.nextNode()
        while ((n = iter.nextNode())) validate(n) || unwrap(n)
    }

    function unwrap(el) {
        const parent = el.parentNode
        const next = el.nextSibling
        while (el.firstChild) parent.insertBefore(el.firstChild, next)
        parent.removeChild(el)
        parent.normalize()
    }

    function input(e) {
        if (e.target === root) requestAnimationFrame(() => dispatch('input', e))
    }
</script>

<div bind:this={root} contenteditable={editable} on:paste on:input={input}><pre contenteditable="true" bind:innerHTML={html} /></div>
