import DropDownList from "./drop-down-list";

export default function Home() {
    return (
        <section>
            <div>
                <h1 className="text-red">JOIN FOR FREE:</h1>
                <input type="radio" id="freeMember" name="MemberShip" value="free" />
                <label htmlFor="freeMember">REDJACK MEMBERSHIP / 60 Minutes of free play per day</label><br />
                <p className="text-red">Or Up Grade to One Eye Jack Membership with unlimited play and no advertising</p> <br />
                <input type="radio" id="annualMember" name="MemberShip" value="annual" />
                <label htmlFor="annualMember">Annual membership at $60/year (16 cents per day)</label><br />
                <input type="radio" id="monthlyMember" name="MemberShip" value="monthly" />
                <label htmlFor="monthlyMember">Monthly membership at $5.99/month (20 cents a day)</label><br />

                <ul>
                    <li>
                        <label htmlFor="first_name"><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" name="first_name" id="first_name" required />
                    </li>
                    <li>
                        <label htmlFor="last_name"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name" name="last_name" id="last_name" required />
                    </li>
                    <li>
                        <label htmlFor="email"><b>E-Mail</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required />
                    </li>
                    <li>
                        <label htmlFor="confirm_email"><b>Confirm E-Mail</b></label>
                        <input type="text" placeholder="Confirm Email" name="confirm_email" id="confirm_email" required />
                    </li>
                    <li>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    </li>
                    <li>
                        <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    </li>
                </ul>
                <div>
                    <div>
                        <div>

                        </div>
                        <div>
                            <ul>
                                <li>
                                    <label htmlFor="gamer_name"><b>Gamer Name</b></label>
                                    <input type="text" placeholder="Gamer Name" name="gamer_name" id="gamer_name" required />
                                </li>
                                <li>
                                    <label htmlFor="gamer_city"><b>City</b></label>
                                    <input type="text" placeholder="Enter City" name="gamer_city" id="gamer_city" required />
                                </li>
                                <li>
                                    <label htmlFor="gamer_county"><b>County</b></label>
                                    <input type="text" placeholder="Enter County" name="gamer_county" id="gamer_county" required />
                                </li>
                                <li>
                                    <label htmlFor="gamer_state"><b>State/Plus</b></label>
                                    <DropDownList />
                                </li>
                                <li>
                                    <label htmlFor="gamer_by"><b>Birth Year</b></label>
                                    <input type="text" placeholder="Enter Birth Year" name="gamer_by" id="gamer_by" required />
                                </li>
                                <li>
                                    <label htmlFor="gamer_sex"><b>Sex</b></label>
                                    <select id="gamer_sex" name="cars">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="NB">Non-Binary</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <input type="checkbox" id="terms" name="terms" value="Bike" />
                <label htmlFor="terms"> I have read and agree to the rules of membership for Gametown.us <br></br>
                    You will receive a e-mail to confirm your membership.
                    Please check to activate membership
                </label>
            </div>
            <div>

            </div>
        </section>
    )
}