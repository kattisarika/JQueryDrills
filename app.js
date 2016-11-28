// your code here!
$(function () {
    watchFormSubmission();
})

function watchFormSubmission() {

    $('.js-text-form').submit(function (event) {
        event.preventDefault();
        var userText = $(this).find('#user-text').val();
        console.log(userText);
        reportOnText(removeReturns(userText));
    });
}

function removeReturns(text) {
    console.log(text);
    return text.replace(/\r?\n|\r/g, "");
}

function reportOnText(text) {
    var tokens = tokenizeText(text);
    console.log(tokens);
    var numDistinctWords = countDistinctWords(tokens);
    console.log(numDistinctWords);
    var numTotalWords = tokens.length;
    var averageWordLength = getAverageWordLength(tokens);
    var averageWordsPerSentence = getAverageWordsPerSentence(text);
    var textReport = $('.js-text-report');
    textReport.find('.js-word-count').text(numTotalWords);
    textReport.find('.js-unique-word-count').text(numDistinctWords);
    textReport.find('.js-average-word-length').text(averageWordLength);
    textReport.find('.js-average-sentence-length').text(averageWordsPerSentence);
    textReport.removeClass('hidden');



}

function tokenizeText(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function countDistinctWords(tokens) {
    var distinctWords = [];
    for (var i = 0; i < tokens.length; i++) {
        if (distinctWords.indexOf(tokens[i]) === -1) {
            distinctWords.push(tokens[i]);
        }
    }
    return distinctWords.length;
}

function getAverageWordLength(tokens) {

    var totalLength = tokens.join("").length;
    return (totalLength / tokens.length).toFixed(2);
}

function getAverageWordsPerSentence(text) {
    // get num sentences by splitting on ending punctuation
    // note that this is a naive approach and doesn't account
    // for things like "Mrs. Smith"
    var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
    var wordCount = tokenizeText(text).length;
    return (wordCount / numSentences).toFixed(2);
}
