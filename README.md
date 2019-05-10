![Demo pic](https://github.com/MartijnReeuwijk/project-3-1819/blob/master/readmeassets/hero.png)

# Jiskefet

This is a notification system voor CERN, to be used in the Jiskefet App.

- [Jiskefet](#Jiskefet)
- [Tabel of content](#tabel-of-content)
  * [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running](#running)
  * [Linting](#linting)
  * [Build With](#build-with)
- [Concept](#concept)
  * [Notification ranked alert](#notification-ranked-alert)
  * [Authors](#authors)
  * [License](#license)
  * [Acknowledgments and Thanks](#acknowledgments-and-thanks)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You will need the following things properly installed on your computer.

-   [Git](https://git-scm.com/)
-   [Node.js](https://nodejs.org/) (with npm)
-   [Bootstrap](https://getbootstrap.com/) (getbootstrap)
-   [Google Chrome](https://google.com/chrome/)
-   It works without the Jiskefet project but it is build with it in mind.


## Installation

-   `git@github.com:MartijnReeuwijk/project-3-1819.git`
-   `cd project-3-1819`

## Running
It has no server so it works without any running.

## Linting

For linting i used CleanCss and Prettier
To run the Prettier use the code below


## Build With

-   [Bootstrap](https://getbootstrap.com/) (getbootstrap)
-   [Prettier](https://prettier.io/docs/en/options.html) - Prettier.io - Linter

# Concept
## Notification ranked alert
This notification system is made for Cern and its many projects this is focused on the Jiskefet App for the Alice LHC.
The notifications are designed so that they are easy to understand with the Button and the "Kill timer" so the user sees it going down before it fades away.
After its is faded away it will go to the notification page where the user can see them again.


#Notification
The notifications.
![modal](https://github.com/MartijnReeuwijk/project-3-1819/blob/master/readmeassets/notifi.png)
The notification system is for now a prototype it works with pieces of the bootstrap but not everything, i used bootstrap so it easily implemented.

```
<section class="notificationHolder">
  <!-- Dit moet eigelijk met een  -->
  <section class="notification outOfView">
    <div class="avatar">
      <img src="./images/avatar.png" alt="avatar">
    </div>
    <div class="lineHolder">
      <div class="line"></div>
    </div>
    <article class="message">
      <h2>Martin Steinacher</h2>
      <p>
        The Sensors are not working
      </p>
      <button type="button" class="btn btn-primary messageButton" data-toggle="modal" data-target="#exampleModalLong">
        Open message
      </button>
    </article>
  </section>
</section>
```

#Modals
I used the modal that is form Bootstrap so that other teams dont need to change much in the implementation. The modal will have the subject of the message and full description and a link to the corresponding thread/board/form this is done so the end user can easly navigate through the Jiskefet App.


It works like the original Bootstrap
![modal](https://github.com/MartijnReeuwijk/project-3-1819/blob/master/readmeassets/modal.png)
```
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" arialabelledby="exampleModalLongTitle" aria-hidden="true">
  <!-- Modal -->
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> Title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        text
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-primary">Go to thread</a>
      </div>
    </div>
  </div>
</div>
```


## Authors

-   **Martijn Reeuwijk** - [MartijnReeuwijk](https://github.com/MartijnReeuwijk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments and Thanks
