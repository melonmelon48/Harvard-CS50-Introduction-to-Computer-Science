// Addition with ints

#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>

int main (int argc, string argv[1])
{
    // Prompt for two ints

    float celsius = get_float("Celsius: ");

    float fahrenheit = ((celsius * 9 / 5) + 32);

    printf("F: %.1f Fahrenheit\n",fahrenheit);

}


