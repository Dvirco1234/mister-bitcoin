import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from './Modal'
import { Screen } from './Screen'

export class ContactPreview extends Component {
    state = {
        isModalOpen: false,
    }
    toggleModal = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
    }

    render() {
        const previewStyle = { backgroundImage: `url(${require('../assets/avatar.png')})` }
        const { contact, onRemoveContact } = this.props
        // const IsModal = () => <Modal txt={'this is info about ' + contact.name} />
        const IsModal = () =>
            this.state.isModalOpen ? (
                <div>
                    <Modal txt={'this is info about ' + contact.name} />
                    <Screen toggleModal={this.toggleModal} />
                </div>
            ) : (
                <span></span>
            )

        return (
            <div style={{ position: 'relative' }}>
                <section className="contact-preview" style={previewStyle}>
                    <Link to={`/contact/${contact._id}`}>
                        <h3>{contact.name}</h3>
                    </Link>
                    <section className="actions">
                        <button onClick={() => onRemoveContact(contact._id)}>Delete</button>
                        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                    </section>
                    <section className="actions info">
                        <button onClick={this.toggleModal}>Info</button>
                    </section>
                </section>
                <IsModal />
            </div>
        )
    }
}
