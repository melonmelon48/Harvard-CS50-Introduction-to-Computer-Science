#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    // Get celsius from user
    if (argc != 2)
    {
        printf("Usage: ./fahrenheit <celsius>\n");
        return 1;
    }

    float celsius = atof(argv[1]);
    float fahrenheit = (celsius * 9) / 5 + 32;
    printf("F: %.1f\n", fahrenheit);
}
