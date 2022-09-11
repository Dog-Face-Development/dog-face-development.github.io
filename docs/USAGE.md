# dog-face-development.github.io Usage

To run the dog-face-development.github.io website, you can run the scripts from GitHub, or run a [Docker](https://www.docker.com/) container from [GitHub Packages](https://github.com/Dog-Face-Development/dog-face-development.github.io/pkgs/container/dog-face-development.github.io).

## GitHub Scripts
1. To run the dog-face-development.github.io website, download the latest `.zip` file from [GitHub Releases](https://github.com/Dog-Face-Development/dog-face-development.github.io/releases/latest) page.
2. Extract the `.zip` file using a program like [7-Zip](https://www.7-zip.org/).
3. Run the `index.html` file.
4. You're all set!

## Docker Container

1. Download and install [Docker](https://www.docker.com/products/docker-desktop/).
2. Open a terminal and pull the container: `docker pull docker pull ghcr.io/dog-face-development/dog-face-development.github.io:master`.
3. Start the container: `docker run -d -p 8000:80 docker pull ghcr.io/dog-face-development/dog-face-development.github.io:master`.
4. Head to [http://localhost:8000/](http://localhost:8000/).
5. Enjoy the website!
