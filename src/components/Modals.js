import React, { Component } from 'react'
import Modal from 'react-awesome-modal';
import SignIn from './SignIn'

export default class Modals extends Component {
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
                
                <input className="modal" type="button" value="Sign In" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                       <SignIn />
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
