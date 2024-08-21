<?php
function discussionContent()
{
    ob_start();
    ?>
    <main class="messagerie">
        <div class="chat-container">
            <ul class="chat">
                <li class="message left">
                    <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                    <p>I'm hungry!</p>
                </li>
                <li class="message right">
                    <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                    <p>Hi hungry, nice to meet you. I'm Dad.</p>
                </li>
                <li class="message left">
                    <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                    <p>DAD! I'm serious!</p>
                </li>
                <li class="message right">
                    <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                    <p>I thought your name was hungry...?</p>
                </li>
                <li class="message left">
                    <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                    <p>ARE YOU KIDDING ME?</p>
                </li>
                <li class="message right">
                    <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                    <p>No, I'm Dad...</p>
                </li>
                <li class="message left">
                    <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                    <p>I'm hungry!</p>
                </li>
                <li class="message right">
                    <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                    <p>Hi hungry, nice to meet you. I'm Dad.</p>
                </li>
                <li class="message left">
                    <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                    <p>DAD! I'm serious!</p>
                </li>
                <li class="message right">
                    <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                    <p>
                        I thought your name was hungry...?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, ea
                        possimus. Id corporis sed eius
                        beatae, officiis, illum nostrum architecto, at nam quos suscipit unde autem earum! Corporis, ducimus
                        in?Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Deserunt cupiditate similique quaerat doloremque iste officia minima.
                        Enim voluptatibus consectetur
                        accusantium dolorum quos temporibus, laboriosam quam doloribus animi corporis id ratione!
                    </p>
                </li>
                <li class="message left">
                    <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                    <p>ARE YOU KIDDING ME?</p>
                </li>
                <li class="message right">
                    <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                    <p>No, I'm Dad...</p>
                </li>
            </ul>
            <form action="/send" method="post" id="mp">
                <input type="textarea" class="text_input" placeholder="Message..." />
                <button type="submit" id="submit" name="submit"><img src="../Assets/Icons/send_button.svg"
                        alt="bouton envoyer" /></button>
            </form>
        </div>
    </main>
    <?php
    return ob_get_clean();
}