<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Contributing](#contributing)
  - [Pull Request Process](#pull-request-process)
  - [Code of Conduct](#code-of-conduct)
    - [Our Pledge](#our-pledge)
    - [Our Standards](#our-standards)
    - [Our Responsibilities](#our-responsibilities)
    - [Scope](#scope)
    - [Enforcement](#enforcement)
    - [Attribution](#attribution)
  - [I just want to add a song to the board](#i-just-want-to-add-a-song-to-the-board)
    - [I want to add a new track](#i-want-to-add-a-new-track)
    - [I want to add a section of a song (e.g crab rave's bass drop)](#i-want-to-add-a-section-of-a-song-eg-crab-raves-bass-drop)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

If you just want to add a song to the soundboard, please head to [the bottom](##i-just-want-to-add-a-song-to-the-board).

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Try to use [Conventional Commits](https://www.conventionalcommits.org) with [Commitizen](https://github.com/commitizen/cz-cli) where possible, to ensure that the changelog generated is accurate.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team or owner at [this email address](29015942+Jabster28@users.noreply.github.com). All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/

## I just want to add a song to the board

Adding a song in itself isn't easy, so I highly suggest you edit the [TRACKS.md](https://github.com/Jabster28/meme-soundboard/blob/master/TRACKS.md)
file and add your track there, following these conventions:

### I want to add a new track

Edit the [TRACKS.md](https://github.com/Jabster28/meme-soundboard/blob/master/TRACKS.md) and add this snippet at the end, evaluating the square brackets:

```md
## [Song title]

- Artist: [artist name]
- Description: "[something witty]"
- Start Time: [time to start at in seconds, leave empty if 0]
- URL: <[thelink://to.youtube.url/of?the=video]>
```

For example, if I wanted a [video](https://www.youtube.com/watch?v=dQw4w9WgXcQ) that starts at 1:12 I would do:

```md
## Never gonna give you up

- Artist: Rick Astley
- Description: "Please click this"
- Start Time: 72
- URL: <https://www.youtube.com/watch?v=dQw4w9WgXcQ>
```

Once you've done that, just submit a pull request with the edits, and I'll do the rest.

### I want to add a section of a song (e.g crab rave's bass drop)

There's a specific order in adding extracts of songs, as you will see in the tracks file.

To add an extract, some rules must be met:

1. The original song must be in the list (if not, you can [add it](###i-want-to-add-a-new-track))
2. The URL and artist must be the same (to prevent collisions with my terrible code)
3. The extract must have a name like bridge or chorus, encapsulated in square brackets
4. If there are multiple sections (i.e two bridges), they must use roman numerals instead of numbers e.g [Bridge IV]

If those are met, simply open [TRACKS.md](https://github.com/Jabster28/meme-soundboard/blob/master/TRACKS.md) and paste this snippet underneath the original song, making sure the extracts in chronological order (i.e the opening must be before the end), evaluating the curly braces:

```md
### {original song} {Extract and number in squared brackets}

- Description: "{optional}"
- Start Time: {time to start at in seconds}
```

After that's done, submit it as a pull request and the rest will be done for you.
