import ErrorAbbr from './ErrorAbbr';
import {
    faDiscord,
    faGithub, faGoogleDrive,
    faRedditAlien,
    faSteam,
    faTelegram,
    faTwitch,
    faTwitter,
    faWikipediaW,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faDownload,
    faEnvelope,
    faExternalLinkAlt,
    faLockOpen,
    faMagnet,
    faMugHot,
    faQuestion
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BaseLink} from 'bluelib';

const icons = Object.freeze({
    "github.com": faGithub,

    "en.wikipedia.org": faWikipediaW,
    "it.wikipedia.org": faWikipediaW,

    "old.reddit.com": faRedditAlien,
    "new.reddit.com": faRedditAlien,
    "www.reddit.com": faRedditAlien,
    "reddit.com": faRedditAlien,

    "twitch.tv": faTwitch,

    "twitter.com": faTwitter,

    "www.youtube.com": faYoutube,
    "youtube.com": faYoutube,
    "youtu.be": faYoutube,

    "t.me": faTelegram,

    "steampowered.com": faSteam,
    "steamcommunity.com": faSteam,

    "discord.gg": faDiscord,
    "discordapp.com": faDiscord,
    "discord.com": faDiscord,

    "ko-fi.com": faMugHot,

    "drive.google.com": faGoogleDrive,

    "ryg.s3.fr-par.scw.cloud": faDownload,
});

export default function (props) {
    // Parse URL
    let url;
    try {
        url = new URL(props.href, window.location.href)
    } catch (e) {
        return (
            <ErrorAbbr error={e}>{props.children}</ErrorAbbr>
        );
    }

    // Icon
    let iconEl = null;
    if (props.icon !== false) {
        let iconObj;

        if (url.host === window.location.host) {
            iconObj = null;
        } else if (url.protocol === "http:") {
            iconObj = faLockOpen;
        } else if (url.protocol === "mailto:") {
            iconObj = faEnvelope;
        } else if (url.protocol === "https:") {
            iconObj = icons[url.host];
            if (iconObj === undefined) {
                iconObj = faExternalLinkAlt;
            }
        } else if (url.protocol === "magnet:") {
            iconObj = faMagnet;
        } else {
            iconObj = faQuestion;
        }

        iconEl = <span><FontAwesomeIcon icon={iconObj}/>&nbsp;</span>;
    }

    return <BaseLink disabled={props.disabled} href={props.href}>{iconEl}{props.children}</BaseLink>;
}
