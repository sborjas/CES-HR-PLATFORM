import "../styles/Widget.scss"
import InsightsIcon from '@mui/icons-material/Insights';

const Widget = (props) => {
    return(
        <div className="widget">
            <div className="center">
                <span className="titulo">{props.cat}</span>
                <span className="puntaje">{props.value}</span>
            </div>
        </div>

    )
}

export default Widget