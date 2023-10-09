import React from 'react';
import './LeftFilter.css';
import { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftFilter = ({ filterOptions, onFilterChange, catgId }) => {

    const [isLocationExpanded, setLocationExpanded] = useState(window.innerWidth < 600 ? false : true);

    const handleCheckboxChange = (category, value) => {
        let newFilterOptions = { ...filterOptions };

        newFilterOptions[category] = newFilterOptions[category].includes(value)
        ? newFilterOptions[category].filter(item => item !== value)
        : [...newFilterOptions[category], value];

        onFilterChange(newFilterOptions);
    };
    
    const handleLocationToggle = () => {
        setLocationExpanded(!isLocationExpanded);
    };
    let municipalities = ["Čukarica", "Novi Beograd", "Palilula", "Rakovica",
                        "Savski venac", "Stari grad", "Voždovac", "Vračar", "Zemun",
                        "Zvezdara", "Barajevo", "Grocka", "Lazarevac", "Mladenovac", 
                        "Obrenovac", "Sopot", "Surčin"]
    municipalities = municipalities.map((value, index) => {
        return {name: value, id: index}
    })


    

    return (
        // <div className="filter-container">
        <>
            {catgId == 22 ? <div className="filter-section">
                <h3>Tip škole</h3>
                <label>
                <input
                    type="checkbox"
                    checked={filterOptions.schoolType.includes('primary')}
                    onChange={() => handleCheckboxChange('schoolType', 'primary')}
                />
                Osnovna škola
                </label>
                <label>
                <input
                    type="checkbox"
                    checked={filterOptions.schoolType.includes('secondary')}
                    onChange={() => handleCheckboxChange('schoolType', 'secondary')}
                />
                Srednja škola
                </label>
            </div>
            : <></> }
            <div className="filter-section">
                <h3>Vlasništvo</h3>
                <label>
                <input
                    type="checkbox"
                    checked={filterOptions.schoolOwnership.includes('private')}
                    onChange={() => handleCheckboxChange('schoolOwnership', 'private')}
                />
                {catgId == 22 ? 'Privatne škole' : 'Privatni vrtići'}
                </label>
                <label>
                <input
                    type="checkbox"
                    checked={filterOptions.schoolOwnership.includes('public')}
                    onChange={() => handleCheckboxChange('schoolOwnership', 'public')}
                />
                {catgId == 22 ? 'Državne škole' : 'Državni vrtići'}
                </label>
            </div>
            <div className="filter-section">
                <div className="filter-header" onClick={handleLocationToggle}>
                    <h3>Opština</h3>
                    <div className='filter-header-arrow'>
                    {isLocationExpanded ?
                    <FontAwesomeIcon icon={faChevronUp} className="icon"/>
                    :<FontAwesomeIcon icon={faChevronDown} className="icon"/>
                    }  
                    </div>

                </div>
                {isLocationExpanded && (
                    municipalities.map(mun => {
                        return <label key={mun.id}>
                            <input
                                type="checkbox"
                                value={mun.id}
                                checked={filterOptions.location.includes(mun.id)}
                                onChange={(e) => handleCheckboxChange('location', +e.target.value)}
                            /> {mun.name}
                            </label>
                    })
                )}
            </div>
            </>
            // </div>
        );
};

export default LeftFilter;