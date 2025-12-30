#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Prompt for name
    string name = get_string("Name: ");

    // Print "Initials: "
    printf("Initials: ");

    // Print first initials asn an uppercase char (toupper)
    printf("%c", toupper(name[0]));
    // iterate through name
    for (int i = 1; i < strlen(name); i++)
    {
        if (name[i] == ' ')
        {
            printf("%c", toupper(name[i + 1]));
        }
    }
    printf("\n");
}
