"use client"
const Clubs = () => {


    return (
        <div>
            <table className="m-auto w-[90%] mt-[20px] textAlignCentre font-Arial fontSize20">
                <tbody>
                    <tr>
                        <td className="pr-[10px] font-[600]">Club Name</td>
                        <td className="pr-[10px] font-[600]">State/County</td>
                        <td className="pr-[10px] font-[600]">Members</td>
                        <td className="pr-[10px] font-[600]">Manager</td>
                        <td className="pr-[10px] font-[600]">Contact</td>
                    </tr>
                    <tr className="cursor-pointer">
                        <td className="pr-[10px]">Happy Poker</td>
                        <td className="pr-[10px]">NJ/Union</td>
                        <td className="pr-[10px]">13</td>
                        <td className="pr-[10px]">Smith</td>
                        <td className="pr-[10px]">Join</td>
                    </tr>
                    <tr className="cursor-pointer bg-gray-300">
                        <td className="pr-[10px]">Poker Friends</td>
                        <td className="pr-[10px]">NJ/Union</td>
                        <td className="pr-[10px]">13</td>
                        <td className="pr-[10px]">Smith</td>
                        <td className="pr-[10px]">Join</td>
                    </tr>
                    <tr className="cursor-pointer">
                        <td className="pr-[10px]">Elite Poker</td>
                        <td className="pr-[10px]">NJ/Union</td>
                        <td className="pr-[10px]">13</td>
                        <td className="pr-[10px]">Smith</td>
                        <td className="pr-[10px]">Join</td>
                    </tr>
                    <tr className="cursor-pointer bg-gray-300">
                        <td className="pr-[10px]">Poker Friends</td>
                        <td className="pr-[10px]">NJ/Union</td>
                        <td className="pr-[10px]">13</td>
                        <td className="pr-[10px]">Smith</td>
                        <td className="pr-[10px]">Join</td>
                    </tr>
                </tbody>
            </table>
        </div>


    )
}

export default Clubs;