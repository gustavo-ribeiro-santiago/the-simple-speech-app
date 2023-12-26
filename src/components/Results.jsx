import Card from 'react-bootstrap/Card';

function Results({ speech }) {
  let sentences = speech
    .trim()
    .replace(/\n/g, ' ')
    .replace(/([.?!])\s*(?=[A-Z])/g, '$1|')
    .split('|')
    .filter((sentence) => sentence.length);
  let words = sentences.map((sentence) => sentence.split(' ')).flat();
  let countOfSentences = sentences.length;
  let countOfWords = words.length;
  let countOfSyllables = words.reduce(
    (acc, cur) => acc + countSyllables(cur),
    0
  );
  var result = 0;
  if (countOfSentences || countOfWords) {
    result =
      0.39 * (countOfWords / countOfSentences) +
      11.8 * (countOfSyllables / countOfWords) -
      15.59; // Flesch-Kincaid Test Equation
    result = result.toFixed(1).toLocaleString('en');
  }
  var color = 'success';
  if (result > 10) color = 'warning';
  if (result > 15) color = 'danger';
  return (
    <section className="results">
      <Card
        border={color}
        style={{ borderWidth: '2px' }}
        className="text-center"
      >
        <Card.Body>
          <Card.Title className={`text-${color}`}>
            <i class="bi bi-speedometer"></i>
            <strong> {result}</strong>
          </Card.Title>
          <Card.Text>
            The Flesch-Kincaid Grade Level score for this speech is {result},
            indicating that it should be understandable with{' '}
            <strong className={`text-${color}`}>
              {result} years of education.
            </strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}

function countSyllables(word) {
  word = word.toLowerCase();
  word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  let syls = word.match(/[aeiouy]{1,2}/g);
  if (syls) return syls.length;
  return 0;
}

export default Results;
