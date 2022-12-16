docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD}
docker build -t ${DOCKER_IMAGE_NAME} ./
docker push ${DOCKER_HUB_REPO}