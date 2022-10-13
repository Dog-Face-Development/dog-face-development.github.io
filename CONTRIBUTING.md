# Contributing to the Dog Face Development Co. Website

🎉 Thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Dog Face Development Co.'s Website on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## START FROM HERE 

**To clone and run your own copy of this website**, you'll need [Git](https://git-scm.com/downloads) installed on your computer. If you would rather not use Git, you can just download the code from GitHub above. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Dog-Face-Development/dog-face-development.github.io.git

# Go into the repository
$ cd dog-face-development.github.io

# Run the webpage
$ index.html
```

You can also pull the [Docker](https://www.docker.com/) image from GitHub Packages. From your command line:

```bash
# Pull image
$ docker pull docker pull ghcr.io/dog-face-development/dog-face-development.github.io:master

# Run container
$ docker run -d -p 8000:80 docker pull ghcr.io/dog-face-development/dog-face-development.github.io:master

# Now, navigate to localhost in your browser to see the webpage
## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to our [Discord](https://discord.gg/yv2FGFVpNc).

## Signing the CLA

If you are not an employee of Dog Face Development Co. and want to submit a pull request to our open source project, you must first sign a Contributor License Agreement (CLA). This allows you to retain your ownership of the code submitted while granting Dog Face Development the necessary legal rights to use your contribution. The CLA only needs to be signed once and it covers all our projects. Follow these simple steps to sign:

- If you are creating a pull request on your own, read the [Individual CLA](https://github.com/Dog-Face-Development/dog-face-development.github.io/blob/v0.1.0/docs/legal/CLA_INDIVIDUAL.md). If you are creating a pull request as part of your employment, read the [Entity CLA](https://github.com/Dog-Face-Development/dog-face-development.github.io/blob/v0.1.0/docs/legal/CLA_ENTITY.md).
- Open a [pull request](https://github.com/Dog-Face-Development/dog-face-development.github.io/compare).
- The CLA Assistant bot will ask you to sign the pull request by writing the following text: `I have read the CLA Document, and I hereby sign the CLA.` If you agree to the CLA, copy the text.
- The CLA Assistant bot will mark your pull request as CLA approved, and you won't have to sign the CLA again!

## New Contributor Guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github).
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git).
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests).

Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). Create a branch, add commits, and [open a pull request](https://github.com/Dog-Face-Development/dog-face-development.github.io/compare).

## How to Contribute

### Did you find a bug?

- **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/Dog-Face-Development/dog-face-development.github.io/issues).
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/Dog-Face-Development/dog-face-development.github.io/issues/new/choose). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.
- Use the issue templates to create the issue. They include step by step guidelines and have lists of things that should be included.

### Did you write a patch that fixes a bug or updates the documentation?

- Open a new [Pull Request](https://github.com/Dog-Face-Development/dog-face-development.github.io/compare) on GitHub with the patch.
- Ensure the pull request description clearly describes the problem and solution. Be sure to include a **title**, and as much relevant information as possible. Include the relevant issue number if applicable.

### Did you fix whitespace, format code, or make a purely cosmetic patch?

- Changes that are cosmetic in nature and do not add anything substantial to the stability, functionality, or testability of the Style Guides are still accepted! Just follow the same instructions as above.
- However, do ensure that any cosmetic changes follow the Dog Face Development Co. Style Guides, found [below](#style).

### Do you intend to add a new feature or change an existing one?

- **Ensure the feature was not already introduced** by searching on GitHub under [Issues](https://github.com/Dog-Face-Development/dog-face-development.github.io/issues). Look for those under the [enhancement](https://github.com/Dog-Face-Development/dog-face-development.github.io/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement) tag.
- If you're unable to find an open issue addressing the new feature, [open a new one](https://github.com/Dog-Face-Development/dog-face-development.github.io/issues/new/choose)!

### Do you have questions about the source code?

- Ask any question about how to use the Style Guides on our [Discord](https://discord.gg/yv2FGFVpNc).
- If it does not get answered, open an [issue](https://github.com/Dog-Face-Development/dog-face-development.github.io/issues/new/choose).  

## Coding Conventions

Start reading our code and you'll get the hang of it.

- A CLA must be signed before contributing (see [above](#signing-the-cla)).
- We indent using four spaces (NOT tabs).
- Every function or piece of code should be heavily commented.
- We use [Semantic Versioning](https://semver.org/).

## Style

While contributing to a Dog Face Development Co. project, make sure your code follow our [Code Style Guide](https://github.com/Dog-Face-Development/DFD-Code-Style-Guide), and any web design elements follow our [Web Style Guide](https://github.com/Dog-Face-Development/DFD-Web-Style-Guide). If you have any changes you wish to make to the styling of our code or web projects, open an issue or pull request on the respective style guide!

## Attribution

This document is adapted from the Contributing documents of [Rails](https://github.com/rails/rails/blob/main/CONTRIBUTING.md), the [GitHub Docs](https://github.com/github/docs/blob/main/CONTRIBUTING.md), [Atom](https://github.com/atom/atom/blob/master/CONTRIBUTING.md), and [OpenGovernment](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md?plain=1).
