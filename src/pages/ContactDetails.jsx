import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactDetails extends Component {
    state = {
        contact: null,
    }
    async componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        const contactId = this.props.match.params.id
        const contact = await contactService.getContactById(contactId)
        this.setState({ contact })
    }

    onBack = () => {
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className="contact-details">
                <img src={require('../assets/avatar.png')} />
                <h4>Name: {contact.name}</h4>
                <h4>Phone: {contact.phone}</h4>
                <h4>Email: {contact.email}</h4>
                <button onClick={this.onBack}>Back</button>
            </div>
        )
    }
}
