#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string text = get_string("Text: ");
    for (int i = 0; i < strlen(text); i++) // strlen - we want this loop to repea
    {
        printf("%c\n", toupper(text[i])) // c prints one character
    }
}

