<script lang="ts">
    import Post from '../../../../../../../core/stores/post/post'
    import Page from '../../../../../../../core/components/blog/Page.svelte'
    import { Section } from '../../../../../../../core/components/flowbite'
    import PageEditor from './pageEditor/PageEditor.svelte'

    export let data: { promiseSection: Promise<Section> }

    import Editor from './pageEditor/PageEditor.svelte'
    import FormatMenu from './pageEditor/FormatMenu.svelte'
    import BlockMenu from './pageEditor/BlockMenu.svelte'

    let selection
    let selectedLink
    let selectedLinkHref = ''

    $: selection && defaultBlock('p', selection.root)

    $: if (selection) {
        selectedLink = findLink(selection.range.commonAncestorContainer)
        selectedLinkHref = selectedLink ? selectedLink.getAttribute('href') : null
    }

    $: if (selectedLink) {
        selectedLink.setAttribute('href', selectedLinkHref)
    }

    function defaultBlock(tag, editor) {
        const doc = editor.ownerDocument
        const first = editor.firstChild
        doc.execCommand('defaultParagraphSeparator', false, tag)
        if (first && first.nodeType !== 1) {
            const block = doc.createElement(tag)
            first.parentNode.insertBefore(block, first)
            block.appendChild(first)
        }
    }

    const createLink = () => document.execCommand('createLink', false, 'https://')
    const formatH2 = () => (document.queryCommandValue('formatBlock') === 'h2' ? document.execCommand('formatBlock', false, 'p') : document.execCommand('formatBlock', false, 'h2'))
    const insertImage = () =>
        document.execCommand(
            'insertHTML',
            false,
            '<figure style="text-align: center" contenteditable="false"><svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="298" height="198" style="fill:#dedede;stroke:#555555;stroke-width:1"/><text x="50%" y="50%" font-size="18" text-anchor="middle" alignment-baseline="middle" font-family="monospace, sans-serif" fill="#555555">🖼️</text></svg><figcaption><p contenteditable="true">Caption</p></figcaption></figure><br>'
        )

    function findLink(el) {
        return (el.closest ? el : el.parentNode).closest('a[href]')
    }

    function unlink() {
        const a = selectedLink
        const doc = a.ownerDocument
        const win = doc.defaultView
        const r = doc.createRange()
        r.selectNode(a)
        const sel = win.getSelection()
        sel.removeAllRanges()
        sel.addRange(r)
        doc.execCommand('unlink')
        selectedLink = null
    }

    function openLink() {
        if (selectedLink) window.open(selectedLinkHref)
    }

    function isEmptyBlock(el) {
        return el.nodeType === 1 && (el.childNodes.length === 0 || (el.childNodes.length === 1 && el.firstChild.tagName === 'BR'))
    }

    const allowedTags = ['A', 'B', 'I', 'P', 'BR', 'H2']

    function validate(el) {
        return allowedTags.includes(el.tagName) || !el.isContentEditable
    }

    let demoOutput = '<p id="p_21dsada">Hello <b id="b_2211dsada"><i id="i_21dsaasdada">Rich</i> Text</b>!</p>'

    const applyTag = (tag: string) => {
        /**
         * 1. Get main el, who contains selected head text
         */

        const mainEl = window.getSelection().getRangeAt(0)
        const ancestor = mainEl.commonAncestorContainer
        let parentEl = ancestor.nodeName === '#text' ? ancestor.parentNode : ancestor
        // const parentEl = preParentEl.nodeName === tag ? preParentEl.parentNode : preParentEl

        /**
         * 2. Get selectedDocFragment
         */

        const selectedDocFragment = mainEl.extractContents()

        /**
         * 3. Check is have tag
         */
        const getChildWithTag = (children: NodeList, tag: string): Node | undefined => {
            for (let el of children) {
                if (el.nodeName === tag.toUpperCase()) {
                    return el
                } else if (el.hasChildNodes()) {
                    return getChildWithTag(el.childNodes, tag)
                }
            }

            return undefined
        }

        const someChildTag = getChildWithTag(selectedDocFragment.childNodes, tag)

        /**
         * 3.1 If el exist, then remove, else insert
         */
        // const elContent = mainEl.createContextualFragment('</' + tag + '>' + selectedDocFragment + '<' + tag + '>')
        // console.log(mainEl.startContainer)
        // console.log(mainEl.endContainer)
        // console.log(mainEl.startOffset)
        // console.log(mainEl.endOffset)
        // console.log(parentEl.childNodes)

        if (someChildTag) {
            const elContent = mainEl.createContextualFragment((someChildTag as HTMLElement).innerHTML)
            //console.log(elContent, someChildTag)
            someChildTag.parentNode.replaceChild(elContent, someChildTag)

            mainEl.insertNode(selectedDocFragment)
        } else {
            const newEl = document.createElement(tag)
            newEl.appendChild(selectedDocFragment)

            mainEl.insertNode(newEl)

            if (parentEl.nodeName === tag.toUpperCase()) {
                const upParentEl = parentEl.parentNode
                console.log(upParentEl)
                console.log(parentEl.childNodes)
                for (let child of parentEl.childNodes) {
                    console.log(child)
                    if (child.nodeName === tag.toUpperCase()) {
                        for (let deepChild of child.childNodes) {
                            upParentEl.insertBefore(deepChild.cloneNode(true), parentEl)
                        }
                    } else {
                        const newEl = document.createElement(tag)
                        newEl.appendChild(child.cloneNode(true))
                        upParentEl.insertBefore(newEl, parentEl)
                    }
                }

                upParentEl.removeChild(parentEl)
                parentEl = upParentEl
            }
        }

        /**
         * 4. Check identical neighborhood tags and collapse to one
         */
        const replaceDoublesNodes = (parent: Node) => {
            let main = null
            console.log('parent')
            console.log(parent)
            console.log(parent.childNodes)

            for (let el of parent.childNodes) {
                console.log('el ======== ')
                console.log(el)
                console.log(el.nodeName)
                console.log(el.nodeValue)
                console.log(el.nodeValue?.length)

                if (el.nodeName === '#text' && !el.nodeValue.length) {
                    console.log('remove')
                } else if (el.nodeName === main?.nodeName) {
                    if (el.nodeName === '#text') {
                        parent.normalize()
                    } else {
                        console.log('append=------------')
                        for (let childEl of el.childNodes) {
                            main.appendChild(childEl.cloneNode(true))
                        }

                        el.remove()
                        replaceDoublesNodes(main)
                    }
                } else {
                    main = el
                }
            }
        }

        console.log(parentEl)

        replaceDoublesNodes(parentEl)
    }

    const bold = () => {
        applyTag('b')
    }

    const italic = () => {
        applyTag('i')
    }
</script>

{#if selectedLink}
    <FormatMenu range={selectedLink}>
        <input type="text" bind:value={selectedLinkHref} placeholder="https://" />
        <button on:click={unlink}>×</button>
        <button on:click={openLink}>🡕</button>
    </FormatMenu>
{:else if selection && !selection.range.collapsed}
    <FormatMenu range={selection.range}>
        <button on:click={formatH2}>H</button>
        <button on:click={bold}><b>b</b></button>
        <button on:click={italic}><i>i</i></button>
        <button on:click={createLink}><u>link</u></button>
    </FormatMenu>
{:else if selection && isEmptyBlock(selection.range.startContainer)}
    <BlockMenu range={selection.range.startContainer}>
        <button on:click={insertImage}>🖼️</button>
    </BlockMenu>
{/if}

<Editor {validate} bind:selection on:input={(e) => (demoOutput = e.detail.target.innerHTML)} html={demoOutput} />

<textarea value={demoOutput} />

<style>
    :global(div[contenteditable]) {
        outline: 0;
        margin: 2em 1em;
    }
    textarea {
        width: 100%;
        height: 50%;
    }
</style>
