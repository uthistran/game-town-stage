import Avatar from "../component/avatar";
import TournamentContainer from "../component/tournament-container";
import member from "../data/default-member";

const Member = () => {
    return<>
        <div className="flex flex-row min-w-screen">
            <div className="flex-[60%] ml-[50px]">
                <div  className="w-[90%] h-auto md:h-[calc(100vh-150px)] bg-white flex flex-row">
                    <Avatar/>
                    <div className="flex flex-col my-6">
                        <h1 className="text-black text-2xl">{member.name}</h1>
                        <p className="text-black text-sm">{member.state} / {member.country}</p>
                        <p className="text-black text-sm">{member.gender} </p>
                        <p className="text-black text-sm">{member.clubs} </p>
                        <p className="text-black text-sm">{member.playtime} </p>
                    </div>
                    <div className="message-editor border-solid border border-gray-300 w-[200px] h-[200px] m-6 rounded-lg">
                        <textarea id="message-input" className="w-full h-full resize-none text-black" placeholder="Enter your message"></textarea>
                        <button id="submit-button" className="bg-red-600">Connect</button>
                    </div>
                </div>
            </div>
            <TournamentContainer />
        </div>
    </>
}

export default Member;