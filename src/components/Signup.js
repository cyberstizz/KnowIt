import React, { Component } from 'react'
import '../App.css'
import Modal from 'react-awesome-modal'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
 
    render() {
        return (
            <section>
                
                <input type="button" value="Sign Up" onClick={() => this.openModal()} />
                <Modal className="test" visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                    <form onSubmit={this.handleChange}>
                     <label>
                         Email:
                            <input id="email
                            "type="text" onChange={this.handleChange}/>
                        Password:
                            <input type="text" onChange={this.handleChange}/>
                            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                     </label>
                    </form>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}


