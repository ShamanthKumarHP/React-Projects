
export default function UserInput({onChangeInput, userInput}){
    
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initital Investment</label>
                    <input type="number" required onChange={(event)=> onChangeInput('initialInvestment', event.target.value)} value={userInput.initialInvestment}/>
                    {/* event.target.value will be string even thought it is telling it to be number */}

                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required onChange={(event)=> onChangeInput('annualInvestment', event.target.value)} value={userInput.annualInvestment}/>

                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" required onChange={(event)=> onChangeInput('expectedReturn', event.target.value)} value={userInput.expectedReturn}/>

                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required onChange={(event)=> onChangeInput('duration', event.target.value)} value={userInput.duration}/>
                </p>
            </div>
        </section>
    )
}