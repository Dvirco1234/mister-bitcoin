import { Component, useEffect } from 'react'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { contactService } from '../services/contactService'
import { StatisticPage } from './StatisticPage'
import { bitcoinService } from '../services/bitcoinService'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'

export const ContactApp = props => {
    // state = {
    //     contacts: null,
    //     filterBy: null,
    // }

    const { contacts } = useSelector(state => state.contactModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContacts())
    }, [])

    // componentDidMount() {
    //     loadContacts()
    //     bitcoinService.getRate()
    // }

    // async loadContacts() {
    //     try {
    //         const contacts = await contactService.getContacts(state.filterBy)
    //         setState({ contacts })
    //     } catch (err) {
    //         console.log('err:', err)
    //     }
    // }

    const onRemoveContact = async contactId => {
        // await contactService.deleteContact(contactId)
        // loadContacts()
        await dispatch(removeContact(contactId))
    }

    // const onSelectContactId = contactId => {
    //     setState({ selectedContactId: contactId })
    // }

    const onChangeFilter = filterBy => {
        // setState({ filterBy }, loadContacts)
        dispatch(setFilterBy(filterBy))
        dispatch(loadContacts())
    }

    // const { contacts } = state
    if (!contacts) return <div>Loading...</div>
    return (
        <div className="container">
            <ContactFilter onChangeFilter={onChangeFilter} />
            <Link to="/contact/edit">Add contact</Link>
            <ContactList onRemoveContact={onRemoveContact} contacts={contacts} />
        </div>
    )
}
