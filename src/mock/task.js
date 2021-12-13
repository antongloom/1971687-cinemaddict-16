import dayjs from 'dayjs'

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b))
  const upper = Math.floor(Math.max(a, b))

  return Math.floor(lower + Math.random() * (upper - lower + 1))
}

const getTime = (time) => {
  if (time < 60) return `${time}m`
  if (time % 60 === 0) return `${time/60}h`
  else return `${Math.trunc(time/60)}h ${time%60}min`
}

const getDescription = (text,limit) => {
  if (text.length < limit) return text
  return text.slice(0, limit) + "..."
}

const generatePoster = () => {
  const poster = [
    '/images/posters/made-for-each-other.png',
    '/images/posters/popeye-meets-sinbad.png',
    '/images/posters/sagebrush-trail.jpg',
    '/images/posters/santa-claus-conquers-the-martians.jpg',
    '/images/posters/the-dance-of-life.jpg',
  ]

  const randomIndex = getRandomInteger(0, poster.length - 1)
  
  return poster[randomIndex]
}

const generateName = () => {
  const name = [
    'The Dance of Life',
    'Sagebrush Trail',
    'The Man with the Golden Arm',
    'Santa Claus Conquers the Martians',
    'Popeye the Sailor Meets Sindbad the Sailor',
  ]

  const randomIndex = getRandomInteger(0, name.length - 1)
  
  return name[randomIndex]
}

const generateRating = () => {
  const rating = [
    8.3,
    3.2,
    9.0,
    2.3,
    6.3
  ]

  const randomIndex = getRandomInteger(0, rating.length - 1)
  
  return rating[randomIndex]
}

const generateYear = () => {
  const year = [
    1929,
    1933,
    1955,
    1964,
    1936
  ]

  const randomIndex = getRandomInteger(0, year.length - 1)
  
  return year[randomIndex]
}

const generateTime = () => {
  const time = [
    115,
    54,
    119,
    81,
    16
  ]

  const randomIndex = getRandomInteger(0, time.length - 1)
  
  return getTime(time[randomIndex])
}

const generateGenre = () => {
  const genre = [
    'Musical',
    'Western',
    'Drama',
    'Comedy',
    'Cartoon'
  ]

  const randomIndex = getRandomInteger(0, genre.length - 1)
  
  return genre[randomIndex]
}

const generateDescription = () => {
  const description = [
    'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr',
    'Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brants narrow escap',
    'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on',
    'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti',
    'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and'
  ]

  const randomIndex = getRandomInteger(0, description.length - 1)
  
  return getDescription(description[randomIndex])
}



const generateId = () => {
  const id = [42, 41, 40, 39, 37]
  const randomId = getRandomInteger(0, id.length - 1)
  return id[randomId]
}

const generateAuthor = () => {
  const author = ["Peter Jackson", "Christopher Nolan", "Robert Zemeckis", "Thomas Harper Ins", "Clint Eastwood"]
  const randomId = getRandomInteger(0, author.length - 1)
  return author[randomId]
}

const generateComment = () => {
  const comment = [
    "a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.",
    "it was very cool.",
    "I recommend this movie",
    "this movie is very bad",
    "my friends liked this movie"
  ]
  const randomId = getRandomInteger(0, comment.length - 1)
  return comment[randomId]
}

const generateData = () => {
  const maxDay = 5
  const days = getRandomInteger(-maxDay, maxDay)
  return dayjs().startOf('month').add(days, 'day').set('year', 2021).format('YYYY/MM/DD HH:mm:ss')
}

const generateEmotion = () => {
  const emotion = ["smile", "sleeping", "puke", "angry"]
  const randomId = getRandomInteger(0, emotion.length - 1)
  return emotion[randomId]
}

const generateComments = () => {
  return {
    id: generateId(),
    author: generateAuthor(),
    comment: generateComment(),
    date: generateData(),
    emotion: generateEmotion()
  }
}

const generateCountComments = () => {
  const randomCount = getRandomInteger(0, 5)
  const commentCounts = Array.from({length: randomCount}, generateComments)
  return commentCounts.length
}


export const generateTask = () => ({
  poster: generatePoster(),
  name: generateName(),
  rating: generateRating(),
  year: generateYear(),
  time: generateTime(),
  genre: generateGenre(),
  description: generateDescription(),
  commentCounts: generateCountComments(),
  actions: {
    watchlist: Boolean(getRandomInteger(0,1)),
    watched: Boolean(getRandomInteger(0,1)),
    favorites: Boolean(getRandomInteger(0,1))
  }
})