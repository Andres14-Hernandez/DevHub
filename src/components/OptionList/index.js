import styles from "./OptionList.module.css"

function OptionList(props){
    

    const handleChange = (e) => {
        props.setCategories(e.target.value);
    }

    return(
        <div className={styles.optionList}>
            <label>Categoria</label>
            <select className={styles.list} value={props.value} onChange={handleChange} required={true}>
                <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
                {props.categories.map((category, index) => {
                    return <option key={index} value={category}>{category}</option>
                })}
            </select>
        </div>

    )
}

export default OptionList