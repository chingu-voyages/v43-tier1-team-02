import './FinishedStory.css'

const FinishedStory = () => {
    return <main className="FinishedStory">
        <h2 className='story-title'>Story Title</h2>
        <div className='story-text'>
            Lorem Ipsum is simply <span className='active'>dummy</span> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <span className='active'>dummy</span> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled <span className='active'>dummy</span> it to make a type specimen book.<span className='active'>dummy</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <span className='active'>dummy</span> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div className='story-buttons'>
            <button>TO HOMEPAGE</button>
            <button>DO IT AGAIN</button>
        </div>
    </main>
}

export default FinishedStory