import { Component } from 'react'

export class ContactFilter extends Component {
    state = {
        filterBy: {
            txt: '',
        },
    }

    handleChange = ({ target }) => {
        // console.log('target:', target)
        const field = target.name
        const value = target.value
        this.setState({ filterBy: { [field]: value } }, () => {
            this.props.onChangeFilter({ ...this.state.filterBy })
        })
    }

    render() {
        const { filterBy } = this.state
        // const { txt } = this.state.filterBy

        return (
            <form className="contact-filter">
                <input value={filterBy.txt} onChange={this.handleChange} type="text" name="txt" placeholder="Search" />
            </form>
        )
    }
}
