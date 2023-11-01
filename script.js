const proverbs = [
"Actions speak louder than words. Meaning: What people do is more important than what they say.",
"Every cloud has a silver lining. Meaning: There is something good in every bad situation.", 
"Don't count your chickens before they hatch. Meaning: Don't plan on the success of something until it actually happens.",
"Where there's smoke, there's fire. Meaning: If there are signs of a problem, there's probably a good reason to be concerned.",
"All that glitters is not gold. Meaning: Not everything that looks valuable or attractive on the outside is necessarily good.",
"A penny for your thoughts. Meaning: Asking someone what they are thinking.",
"The early bird catches the worm. Meaning: Being early or quick gives you an advantage.",
"Don't cry over spilled milk. Meaning: Don't waste your time worrying about things that have already happened and cannot be changed.",
"Rome wasn't built in a day. Meaning: Important things take time to create or achieve.",
"Haste makes waste. Meaning: Doing things too quickly can lead to mistakes that waste time and resources.",
"A stitch in time saves nine. Meaning: Fixing a problem early prevents it from becoming a bigger issue later.",
"You can't judge a book by its cover. Meaning: You cannot determine someone's true qualities or character solely based on their appearance.",
"Too many cooks spoil the broth. Meaning: Too many people involved in a task can ruin it. It's better to have a single leader.",
];
function generateProverb() {
const randomIndex = Math.floor(Math.random() * proverbs.length);
const proverbElement = document.getElementById("proverb");
proverbElement.textContent = proverbs[randomIndex];
}