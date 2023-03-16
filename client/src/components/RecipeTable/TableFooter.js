import React, { useEffect } from 'react';


export default function TableFooter() {

    function splitPages() {

    }

    return (
        <div>
            <label>
                Rows Per Page
                <select>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </select>
            </label>
            <button>
                ‹
                Previous Page
            </button>
            <button>
                Next Page
                ›
            </button>


        </div>
    )
}