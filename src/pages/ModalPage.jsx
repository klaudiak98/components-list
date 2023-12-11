import Button from '../components/Button'
import Modal from '../components/Modal'
import { useState } from 'react'

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important information for you.</p>
    </Modal>

  return (
    <div>
        <Button primary onClick={handleClick}>Open modal!</Button>
        {showModal && modal}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, libero? Beatae hic suscipit eos, modi architecto expedita reiciendis reprehenderit odit voluptates earum, ad aspernatur. Tempora saepe reprehenderit, a itaque nemo, doloribus nostrum culpa non, ratione repudiandae odit laborum. Eveniet exercitationem sapiente deserunt qui recusandae est quidem voluptatem iusto! Accusamus id quidem delectus neque, aut laboriosam atque natus omnis ullam illo ad sequi quibusdam facilis commodi. Corrupti impedit possimus, eius mollitia deleniti itaque quos tempora ut earum eos tempore enim provident nam accusamus sapiente assumenda natus dolorem. Excepturi tenetur deserunt rem voluptatem dolorum repudiandae et doloribus eligendi id quis dolorem laudantium iusto hic veritatis laboriosam eius obcaecati, saepe porro autem nisi suscipit? Nam ipsam asperiores labore porro quas aperiam accusantium sed molestiae aliquid beatae enim earum alias mollitia velit repellat, voluptatem, voluptatum natus iure quo? Adipisci aliquid cumque molestias maiores voluptatem, quod iusto. Laudantium quidem soluta iure. Consectetur error exercitationem nesciunt consequatur laborum molestiae beatae! Mollitia odit repellat, eveniet dolore voluptates magni at architecto esse ducimus saepe natus aliquid repellendus voluptatem sapiente aut laborum autem odio voluptatum ut necessitatibus debitis. Molestias, magni cumque debitis quas nam necessitatibus soluta rem obcaecati nesciunt porro inventore et aperiam ullam dolorum ex, vero temporibus minima expedita! In quibusdam maiores, itaque incidunt amet quas sit hic quidem esse adipisci consequatur eligendi sequi fugiat quaerat fugit quia modi nemo quis excepturi eveniet eius aut. Sit vel dicta neque possimus accusantium doloribus ad adipisci voluptatum eaque ipsa eius excepturi cupiditate facere ratione minus veritatis magnam eum nesciunt reprehenderit odio suscipit, blanditiis, sed quas. Voluptatum minus explicabo placeat repudiandae accusamus quam laborum officiis, alias nihil a vero velit sapiente illo. Esse, eius delectus! Rem explicabo quas nemo quod excepturi fuga laudantium reprehenderit nihil, laborum, velit iusto veritatis voluptatibus exercitationem ex enim voluptas similique itaque. Numquam quibusdam ullam non dolor consectetur ab assumenda officia molestias earum adipisci recusandae fugit mollitia, nemo ad cupiditate, eum obcaecati? Sit unde nisi voluptatum tempora hic blanditiis voluptatem? Aspernatur explicabo impedit dignissimos voluptates nisi tenetur ex nam quis ipsa dolores? Eius hic ab eaque? Deserunt illum assumenda culpa eius ut doloremque molestias quae consequuntur vel facere facilis sit, nostrum explicabo ex, eveniet ea molestiae nobis, magnam ipsam. Iste deserunt dolores voluptatibus iusto accusantium facere nam explicabo eius repudiandae veniam qui vero veritatis suscipit placeat reiciendis, laborum earum ad optio tempore. Ea cumque temporibus doloremque quibusdam nesciunt impedit, corrupti eaque explicabo, excepturi eligendi fugit placeat dolorem?</p>
    </div>
  )
}

export default ModalPage