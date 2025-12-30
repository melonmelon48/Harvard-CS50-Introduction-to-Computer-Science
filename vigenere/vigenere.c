#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

bool only_letters(string key);

int main(int argc, string argv[])
{
    // check input is correct
    if (argc != 2)
    {
        printf("Usage: ./vigenere keyword \n");
        return 1;
    }
    if (!only_letters(argv[1]))
    {
        printf("key must be only letters! \n");
        return 1;
    }

    // save argv[1] into a string
    for (int j = 0; j < strlen(argv[1]); j++)
    {
        argv[1][j] = toupper(argv[1][j]);
    }
    string key = argv[1];

    string plaintext = get_string("plaintext: ");

    printf("ciphertext: ");
    // Cipher
    int x = 0;
    for (int i = 0, n = strlen(plaintext); i < n; i++)
    {
        char c = plaintext[i];
        if (isalpha(c))
        {
            if (isupper(c))
            {
                printf("%c", 'A' + (c - 'A' + (key[(i - x) % strlen(key)] - 'A')) % 26);
            }
            else if (islower(c))
            {
                printf("%c", 'a' + (c - 'a' + (key[(i - x) % strlen(key)] - 'A')) % 26);
            }
        }
        else
        {
            printf("%c", c);
            x = x + 1;
        }
    }
    printf("\n");
}

// Check if bool is only letters
bool only_letters(string key)
{
    for (int i = 0; i < strlen(key); i++)
    {
        if (!isalpha(key[i]))
        {
            return false;
        }
    }
    return true;
}
