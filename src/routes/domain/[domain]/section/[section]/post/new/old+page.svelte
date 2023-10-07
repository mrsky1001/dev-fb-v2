<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import Section from '../../../../../../../core/components/section/Section.svelte'

    export let data: { promiseSection: Promise<Section> }

    import Editor from './pageEditor/PageEditor.svelte'
    import FormatMenu from './pageEditor/FormatMenu.svelte'
    import BlockMenu from './pageEditor/BlockMenu.svelte'
    import { nanoid } from 'nanoid'
    import s from '../../../../../../../core/components/blog/s.svelte'

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

    function createLink = () => document.execCommand('createLink', false, 'https://')
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

    let demoOutput = '<b id="p_21dsada">Hello <p id="b_2211dsada">textBLeft <i id="i_21dsaasdada"> textILeft Rich textIRight</i> textBRight</p> !</b>'

    const insertBeforeAllChild = (el: Node): void => {
        for (let child of el.childNodes) {
            el.parentNode?.insertBefore(child, el)
        }

        el.parentNode?.removeChild(el)
    }

    const findIdenticalTagOfParents = (parentNode: Node, tag): Node => {
        let someParentEl = parentNode

        while ((someParentEl as HTMLElement).id !== 'editor') {
            if (someParentEl.nodeName === tag) {
                return someParentEl
            }
            someParentEl = someParentEl.parentNode
        }
    }

    const isIncludeNodeById = (el: Node, id: string): boolean => {
        let isInclude = false

        for (let child of el.childNodes) {
            if ((child as HTMLElement).id === id) {
                return true
            } else {
                isInclude = isIncludeNodeById(child, id)
            }
        }

        return isInclude
    }

    const hasChildNodes = (el: Node): boolean => {
        if (el.childNodes.length === 1) {
            return !!el.childNodes[0].textContent.length
        } else {
            return !!el.childNodes.length
        }
    }

    /**
     * todo use tiptap
     * @param parent
     * @param elId
     * @param tag
     */

    const splitParentOfEl = (parent: Node, elId: string, tag: string) => {
        let isFoundCenter = false
        const newParentLeftEl = document.createElement(parent.nodeName)
        const newCenterEl = document.createElement(parent.nodeName)
        const newParentRightEl = document.createElement(parent.nodeName)

        for (let childEl of parent.childNodes) {
            if ((childEl as HTMLElement).id === elId || isIncludeNodeById(childEl, elId)) {
                newCenterEl.appendChild(childEl.cloneNode(true))
                isFoundCenter = true
            } else {
                /**
                 * Left
                 */
                if (!isFoundCenter) {
                    newParentLeftEl.appendChild(childEl.cloneNode(true))
                } else {
                    /**
                     * Right
                     */
                    newParentRightEl.appendChild(childEl.cloneNode(true))
                }
            }
        }

        hasChildNodes(newParentLeftEl) && parent.parentNode.insertBefore(newParentLeftEl, parent)
        parent.parentNode.insertBefore(newCenterEl, parent)
        hasChildNodes(newParentRightEl) && parent.parentNode.insertBefore(newParentRightEl, parent)

        if (parent.nodeName === tag) {
            insertBeforeAllChild(newCenterEl)
        }

        parent.parentNode?.removeChild(parent)
    }

    const applyTag = (tag: string) => {
        tag = tag.toUpperCase()

        /**
         * 1. Get main el, who contains selected head text
         */

        const mainEl = window.getSelection().getRangeAt(0)
        const ancestor = mainEl.commonAncestorContainer
        const parentEl = ancestor.nodeName === '#text' ? ancestor.parentNode : ancestor
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
        if (someChildTag) {
            const elContent = mainEl.createContextualFragment((someChildTag as HTMLElement).innerHTML)
            someChildTag.parentNode.replaceChild(elContent, someChildTag)

            mainEl.insertNode(selectedDocFragment)

            /**
             * todo Check all neighbour for same tag
             */
        } else {
            const newEl = document.createElement(tag)
            const newElId = nanoid()

            newEl.id = newElId
            newEl.appendChild(selectedDocFragment)
            mainEl.insertNode(newEl)

            const identicalTagEl: Node = findIdenticalTagOfParents(newEl.parentNode, tag)

            if (identicalTagEl) {
                /**
                 * Splitting of parent nodes on the left and right sides of the child nodes
                 */
                const parentIdenticalTagEl = identicalTagEl.parentNode
                let parentForSplit = parentEl
                while (parentForSplit.nodeName !== parentIdenticalTagEl.nodeName) {
                    const temp = parentForSplit.parentNode
                    splitParentOfEl(parentForSplit, newElId, tag)
                    parentForSplit = temp
                }

                insertBeforeAllChild(document.getElementById(newElId))
            }
        }

        /**
         * 4. Check identical neighborhood tags and collapse to one
         */
        const replaceDoublesNodes = (parent: Node) => {
            let main = null

            for (let el of parent.childNodes) {
                console.log(parent.childNodes)
                console.log('el.nodeValue')
                console.log(el.nodeName)
                console.log(el.nodeValue)
                console.log(el.childNodes)
                console.log(el.childNodes.length)

                if (el.nodeName === main?.nodeName) {
                    if (el.nodeName === '#text') {
                        parent.normalize()
                    } else if (main) {
                        for (let childEl of el.childNodes) {
                            main.appendChild(childEl.cloneNode(true))
                        }

                        el.remove()
                        replaceDoublesNodes(main)
                    }
                } else if (el.nodeName !== '#text') {
                    main = el
                }
            }
        }

        console.log(parentEl)

        replaceDoublesNodes(parentEl)

        demoOutput = document.getElementById('editor').innerHTML
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
