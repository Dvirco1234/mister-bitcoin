import { Component, createRef } from 'react'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {
    state = {
        contact: null,
    }

    // phoneRef = createRef()

    async componentDidMount() {
        const { id } = this.props.match.params
        const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
        this.setState({ contact }, () => {})
    }

    onSaveContact = async ev => {
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const { value } = target
        this.setState(prevState => {
            if (field === 'phone' && value.length > 12) return
            return { contact: { ...prevState.contact, [field]: value } }
        })
    }

    addSpace = ev => {
        let { value } = ev.target
        let phoneLength = value.length
        if (phoneLength === 3 || phoneLength === 7) {
            this.setState(prevState => ({ contact: { ...prevState.contact, phone: value + '-' } }))
        }
    }

    inputRefFunc = elInput => {
        elInput && elInput.focus()
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className="contact-edit">
                <h1>{contact._id ? 'Edit' : 'Add'} contact</h1>
                <form onSubmit={this.onSaveContact}>
                    <input
                        ref={this.inputRefFunc}
                        value={contact.name}
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <input value={contact.email} type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input
                        // ref={this.phoneRef}
                        value={contact.phone}
                        type="tel"
                        id="phone"
                        name="phone"
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone"
                        onKeyPress={this.addSpace}
                        onChange={this.handleChange}
                        // onChange={ev => {
                        //     this.handleChange(ev)
                        //     this.addSpace(ev)
                        // }}
                    />
                    <button>Save</button>
                </form>
            </section>
        )
    }
}
