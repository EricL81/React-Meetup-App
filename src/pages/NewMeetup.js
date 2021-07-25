import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
	const history = useHistory();

	function addMeetupHandler(meetupData) {
		fetch(
			"https://react-meetups-e2e78-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => {
			history.replace("/");
		});
	}
	return (
		<section>
			<h1>New Meetup Page</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetupPage;
