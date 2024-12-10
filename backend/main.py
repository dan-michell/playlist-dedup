"""
1. Generate spotify access token using the client id and client secret
2. Pull songs in specific playlist
3. Remove duplicates
4. Update playlist 
"""

# Dependencies
import os

from dotenv import load_dotenv


def get_client_details() -> tuple[str, str]:
    """
    Fetches the client id and client secret from the environment variables.
    If the environment variables are not found, it raises a ValueError.

    :raises ValueError: If the client id or client secret is not found in the .env file.
    :returns: The client id and client secret for Spotify Web API.
    :rtype: tuple[str, str]
    """
    load_dotenv()

    client_id: str | None = os.getenv("CLIENT_ID")
    client_secret: str | None = os.getenv("CLIENT_SECRET")

    if not client_id or not client_secret:
        raise ValueError("Client ID or Client Secret not found in .env file")

    return client_id, client_secret


def get_spotify_access_token(client_id: str, client_secret: str) -> str:
    """
    Fetches the Spotify access token using the provided client id and client secret.

    :param client_id: The client id for Spotify Web API.
    :type client_id: str
    :param client_secret: The client secret for Spotify Web API.
    :type client_secret: str
    :returns: The access token for Spotify Web API.
    :rtype: str
    """
    return ""


if __name__ == "__main__":
    pass
