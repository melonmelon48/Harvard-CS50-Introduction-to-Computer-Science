#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// key is digits only
bool only_digits(string key);

int main(int argc, string argv[])
{
    // Make sure program was run with just one command-line argument
    if (argc != 2) // argument count
    {
        printf("Usage: ./caesar <key> \n");
        return 1; // stops the function to avoid getting error message
    }
    // Make sure every character in argv[1] is a digit
    if (!only_digits(argv[1]))
    {
        printf("Key must be digitals only! \n");
        return 1;
    }
    // Convert argv[1] from a `string` to an `int`
    int key = atoi(argv[1]);
    // Prompt user for plaintext
    string plaintext = get_string("plaintext: ");

    printf("ciphertext: ");
    // For each character in the plaintext:
    for (int i = 0, n = strlen(plaintext); i < n; i++)
    {
        char c = plaintext[i];
        if (isalpha(c))
        {
            if (isupper(c))
            {
                printf("%c", 'A' + (c - 'A' + key) % 26);
            }
            else if (islower(c))
            {
                printf("%c", 'a' + (c - 'a' + key) % 26);
            }
        }
        else
        {
            printf("%c", c);
        }
    }

    printf("\n");
    return 0; //end
}

bool only_digits(string key) // used to validate key
{
    for (int i = 0; i < strlen(key); i++)
    {
        if (!isdigit(key[i]))
        {
            return false; // one non-digit = false
        }
    }
    return true; // otherwise - it's true
}
