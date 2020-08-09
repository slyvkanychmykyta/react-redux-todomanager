import React, {useState} from 'react';
import PropTypes from "prop-types";
import {setQueryValue} from "../../store/actions/action-creators";
import {connect} from "react-redux";

export function Header({queryValue, setQueryValue}) {
    const handleChange = ({target}) => {
      setQueryValue(target.value);
    };

    return (
        <header>
            <h1>Планировщик задач</h1>
            <input value={queryValue} onChange={handleChange} placeholder="Поиск" type="text"/>
        </header>
    );
}


Header.propTypes = {
    queryValue: PropTypes.string.isRequired,
    setQueryValue: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    queryValue: state.queryValue
});

const mapDispatchToProps = (dispatch) => ({
    setQueryValue: (value) =>  dispatch(setQueryValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
