import { useEffect, useRef, useState } from 'react'

export const Modal = props => {
    const elModal = useRef()
    const [style, setStyle] = useState({ left: '100%', top: 0, opacity: 0 })

    useEffect(() => {
        locateModal()
    }, [])

    const locateModal = () => {
        const { innerWidth: width, innerHeight: height } = window
        const elPos = elModal.current.getBoundingClientRect()
        // let modalStyle = {}
        let modalStyle = { top: height / 2 - elPos.height / 2 - elPos.top }
        if (width - elPos.right < 30) modalStyle.right = '110%'
        else modalStyle.left = '110%'
        // if (height - elPos.bottom < 30) modalStyle.bottom = '110%'
        // else modalStyle.top = '110%'
        // setState({ modalStyle })
        setStyle(modalStyle)
    }

    return (
        <div ref={elModal} className="modal" style={style}>
            <h1>Modal</h1>
            <p>info</p>
            <p>{props.txt || ''}</p>
        </div>
    )
}
