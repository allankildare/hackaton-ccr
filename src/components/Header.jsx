import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>Logo</h1>
                <nav>
                    <a href="#">Sobre</a>
                    <a href="#">O projeto</a>
                    <a href="#">Contato</a>
                </nav>
            </header>
        )
    }
}