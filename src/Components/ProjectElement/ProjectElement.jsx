import { Card } from "react-bootstrap";

import styles from './ProjectElement.module.css'

function ProjectElement({element}) {
    return ( 
        <>
        <hr/>
        <Card.Subtitle>
            <a href={element.url} className={styles.projectTitle}>
                {element.name}
            </a>
        </Card.Subtitle>

        <Card.Text >
            <div className={styles.descriptionText}>
                {element.description}
            </div>
        </Card.Text>
        </>
     );
}

export default ProjectElement;