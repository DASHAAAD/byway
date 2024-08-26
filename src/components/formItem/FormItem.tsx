import styles from '../../components/formItem/FormItem.module.css'

const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)
    }
    return (
        <input
            onChange={onChange}
            className={styles.input}
            {...props}
        />
    )
}

function FormItem() {
    return (
        <>
            <CustomInput
             
            />
        </>
    )
}

export default FormItem