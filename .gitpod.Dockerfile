FROM gitpod/workspace-full

# Install `MySQL`
FROM gitpod/workspace-mysql

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

# Install personalize module
RUN sudo yarn global add pm2 \
    && sudo yarn global add expo-cli \
    && sudo yarn global add react-native \
    && sudo yarn global add @vue/cli