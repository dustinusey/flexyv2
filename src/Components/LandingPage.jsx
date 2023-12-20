import { useState } from 'react';
import InfoModal from './InfoModal';

/**
 * Landing page component for Flexy application.
 * @returns {JSX.Element} The rendered LandingPage component.
 */
export default function LandingPage() {

    const [infoModal, setInfoModal] = useState(false)

    /**
     * Shows the info modal.
     */
    function showInfoModal() {
        setInfoModal(true)
    }
    

    /**
     * Launches the Flexy application.
     */
    function launchFlexy() {

    }

    /**
     * Launches the GitHub page.
     */
    function launchGitHub() {
        window.location.href = 'http://www.github.com/dustinusey/flexyv2'
    }

    return (
            infoModal ? <InfoModal  infoModal={infoModal} setInfoModal={setInfoModal}/> : 
            <>
                <h1>Welcome to Flexy</h1>
                <p>Everything you need to know about flex-box basics!</p>
                <div className="button-group">
                    <button onClick={showInfoModal}>About Flexy</button>
                    <button onClick={launchFlexy}>Get Started</button>
                    <button onClick={launchGitHub}>GitHub</button>
                </div>
            </>
    )
}