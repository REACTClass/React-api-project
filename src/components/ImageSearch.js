import React, { useState } from "react";
import searchIcon from "../assets/search-icon.png"

export default function ImageSearch({ searchText }) {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text)
    }
    return (
        <div id="search">
            <form onSubmit={onSubmit} role="search">
                <input onChange={e => setText(e.target.value)} type="text" placeholder="Search..." />
                <button type="submit"><img src={searchIcon} alt="search icon" /></button>
            </form>
        </div>
    )
}