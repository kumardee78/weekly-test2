export default function ToggleDiv({setIsShown, isShown}) {
  return (
    <div className={isShown ?'visible':'hidden'} >
        <p className="py-4">
            Growing up bilingual, I developed a love for languages and I
            currently speak four of them fluently. I believe that this skill has
            given me a unique perspective and allows me to communicate
            effectively with clients from all over the world. One of my
            strengths is adding a personal touch to my projects by adding the
            client's identity and message into the design, creating meaningful
            and beautiful end products that are both eye-catching and
            user-friendly.
          </p>
          <p className="pb-4">
            In my free time, I enjoy exploring my other passions, such as
            photography and music production, which provide me with creative
            outlets. I am also very passionate about Web3 and everything related
            to crypto, NFTs and blockchain technology as I believe they have the
            potential to revolutionize business and online interactions.
          </p>
          <p className="pb-4">
            If you have an innovative idea for a project that needs to be
            developed, I would love to hear from you. Your vision can be turned
            into a real product. Don't hesitate to reach out and let's start a
            conversation about your concept. I'm excited to collaborate and help
            bring your ideas to life.
          </p>
    </div>
  )
}
