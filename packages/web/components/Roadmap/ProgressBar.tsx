
interface ProgressBarProps {
    bgcolor: string;
    completed: number;
}



function ProgressBar(props: ProgressBarProps) {
    const containerStyles = {
        height: 20,
        width: '80%',  
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
    };

    const fillerStyles = {
        height: '100%',
        width: `${props.completed}%`,
        backgroundColor: props.bgcolor,
        borderRadius: 'inherit',
    };
    
    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    };  

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${props.completed}`}</span>
            </div>
        </div>
    )
}

export default ProgressBar;