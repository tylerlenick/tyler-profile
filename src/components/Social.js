import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
export const Social = () => {
    return (
        <div className="fixed">
            <a href="https://github.com/tylerlenick" target="_blank" class="transition duration-500 ease-in-out transform hover:-translate-y-1 background-transparent font-bold uppercase px-3 py-1 text-4xl outline-none focus:outline-none mr-1 mb-1" type="button">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a><br/>
            <a href="https://www.linkedin.com/in/tyler-lenick-069960ba/" target="_blank" class="transition duration-500 ease-in-out transform hover:-translate-y-1 background-transparent font-bold uppercase px-3 py-1 text-4xl outline-none focus:outline-none mr-1 mb-1" type="button">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a><br/>
            <a href="https://twitter.com/tylenick" target="_blank" class="transition duration-500 ease-in-out transform hover:-translate-y-1 background-transparent font-bold uppercase px-3 py-1 text-4xl outline-none focus:outline-none mr-1 mb-1" type="button">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
        </div>
    )
}
