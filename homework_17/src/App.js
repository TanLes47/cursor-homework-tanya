import "./App.css";
import Post from "./components/post";

const avatar1 =
	"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const postImg1 =
	"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const avatar2 =
	"https://pbs.twimg.com/profile_images/1065602761201463296/GxH3TeKR_400x400.jpg";
const postImg2 =
	"https://pbs.twimg.com/media/E7xxQMZWQAQUPz1?format=jpg&name=small";

const posts = [
	{
		id: 0,
		name: "Anakin skywalker",
		avatar: avatar1,
		nickname: "@dart_vader",
		content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
		image: postImg1,
		date: "Feb 26",
	},
	{
		id: 1,
		name: "EspresoTV",
		avatar: avatar2,
		nickname: "@EspresoTV",
		content: "Фестиваль Ідей 2021 оголосив програму.",
		image: postImg2,
		date: "1:04 PM · Aug 2, 2021·Espreso RSS Tweet",
	},
];

function App() {
	return (
		<div className="App">
			{posts.map((post) => (
				<Post {...post} key={post.id} />
			))}
		</div>
	);
}

export default App;
