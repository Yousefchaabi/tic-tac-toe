const { createContext, useState } = require("react");

const ModalContext = createContext(); 

const ModalState = (props) => {
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('start'); // winner || start
    const showModal = () => {
        setShow(true);
    }

    const hideModal = () => {
        setShow(false);
    }

    return (
        <ModalContext.Provider value={{
            show,
            modalMode: mode,
            setModalMode: setMode,
            showModal,
            hideModal
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export {ModalContext, ModalState} ;