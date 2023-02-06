

export default function Contact() {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <p>
                I am currently looking for a full-time position as a web developer.
                Please feel free to contact me with any questions or comments.
            </p>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </section>
    );
}
